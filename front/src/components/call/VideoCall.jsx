import React, { useRef, useState } from "react";

const VideoCall = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const signaling = useRef(new BroadcastChannel("webrtc"));
  const pc = useRef(null);
  const localStream = useRef(null);

  // Handle "Start Call" Button Click
  const startCall = async () => {
    try {
      // Get user media
      localStream.current = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      localVideoRef.current.srcObject = localStream.current;

      // Update state and send "ready" signal
      setIsCallActive(true);
      signaling.current.postMessage({ type: "ready" });

      signaling.current.onmessage = async (e) => {
        switch (e.data.type) {
          case "offer":
            await handleOffer(e.data);
            break;
          case "answer":
            await handleAnswer(e.data);
            break;
          case "candidate":
            await handleCandidate(e.data);
            break;
          case "bye":
            endCall();
            break;
          default:
            console.log("Unhandled message:", e.data);
        }
      };
    } catch (error) {
      console.error("Error starting call:", error);
    }
  };

  // Handle "End Call" Button Click
  const endCall = () => {
    if (pc.current) {
      pc.current.close();
      pc.current = null;
    }
    if (localStream.current) {
      localStream.current.getTracks().forEach((track) => track.stop());
      localStream.current = null;
    }
    setIsCallActive(false);
    signaling.current.postMessage({ type: "bye" });
  };

  const createPeerConnection = () => {
    pc.current = new RTCPeerConnection();
    pc.current.onicecandidate = (e) => {
      const candidateMessage = {
        type: "candidate",
        candidate: e.candidate ? e.candidate.candidate : null,
        sdpMid: e.candidate?.sdpMid,
        sdpMLineIndex: e.candidate?.sdpMLineIndex,
      };
      signaling.current.postMessage(candidateMessage);
    };
    pc.current.ontrack = (e) => {
      remoteVideoRef.current.srcObject = e.streams[0];
    };

    localStream.current
      .getTracks()
      .forEach((track) => pc.current.addTrack(track, localStream.current));
  };

  const handleOffer = async (offer) => {
    if (pc.current) {
      console.error("Peer connection already exists");
      return;
    }
    createPeerConnection();
    await pc.current.setRemoteDescription(new RTCSessionDescription(offer));

    const answer = await pc.current.createAnswer();
    await pc.current.setLocalDescription(answer);
    signaling.current.postMessage({ type: "answer", sdp: answer.sdp });
  };

  const handleAnswer = async (answer) => {
    if (!pc.current) {
      console.error("No peer connection");
      return;
    }
    await pc.current.setRemoteDescription(new RTCSessionDescription(answer));
  };

  const handleCandidate = async (candidate) => {
    if (!pc.current) {
      console.error("No peer connection");
      return;
    }
    if (!candidate.candidate) {
      await pc.current.addIceCandidate(null);
    } else {
      await pc.current.addIceCandidate(candidate);
    }
  };

  return (
    <div>
      <div id="container">
        <video className="rounded w-[45%]" ref={localVideoRef} autoPlay playsInline muted ></video>
        <video className="rounded w-[45%]" ref={remoteVideoRef} autoPlay playsInline></video>
      </div>
      <div className="flex gap-2 text-black ">
        <button className=" w-full py-1 border border-black hover:bg-green-500 rounded-md " onClick={startCall} disabled={isCallActive}>
          Start 
        </button>
        <button className="w-full border py-1 border-black hover:bg-red-500 rounded-md " onClick={endCall} disabled={!isCallActive}>
          End 
        </button>
      </div>
    </div>
  );
};

export default VideoCall;
