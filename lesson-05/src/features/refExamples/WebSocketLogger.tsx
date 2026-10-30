import { useEffect, useRef } from 'react';

export function WebSocketLogger() {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket('wss://ws.postman-echo.com/raw');
    socketRef.current = socket;

    socket.onopen = () => {
      console.log('WebSocket connected');
    };

    socket.onmessage = (event) => {
      console.log('WebSocket message:', event.data);
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket closed');
    };

    // Cleanup: закрываем соединение при размонтировании
    return () => {
      socketRef.current?.close();
      socketRef.current = null;
    };
  }, []);

  return <div>WebSocketLogger (откройте консоль)</div>;
}