package controllers

import (
	"code.google.com/p/go.net/websocket"
	"github.com/revel/revel"
)

type Audio struct {
	*revel.Controller
}

func (c Audio) RoomSocket(ws *websocket.Conn) revel.Result {

	// In order to select between websocket messages and subscription events, we
	// need to stuff websocket events into a channel.
	ch := make(chan []byte)

	go func() {
		var data []byte
		for {
			err := websocket.Message.Receive(ws, &data)
			if err != nil {
				return
			}
			ch <- data
		}
	}()

	// Now listen for new events from either the websocket or the chatroom.
	for {
		var data []byte
		data <- ch
		if data!= nil {
			websocket.Message.Send(ws, &data)
		}
	}
	return nil
}