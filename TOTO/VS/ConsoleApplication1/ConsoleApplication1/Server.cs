using System;
using System.Net.Sockets;
using System.Net;
using WebSocketSharp;
using WebSocketSharp.Server;

namespace ConsoleApplication1
{
    public class Server : WebSocketBehavior
    {
        protected override void OnMessage(MessageEventArgs e)
        {
            var j = 0;

            for (var i = 0; i < 1000000; i++)
            {
                j = i;
            }
               
            Send("done");
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            var wssv = new WebSocketServer("ws://localhost:3000");
            wssv.AddWebSocketService<Server>("/");
            wssv.Start();
            Console.WriteLine("Up and running! OMG bbq!!!!");
            Console.ReadKey(true);
            wssv.Stop();
        }
    }
}
