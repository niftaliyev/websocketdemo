
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Timers;
using WebSocketSharp;
using WebSocketSharp.Server;

namespace WebSocketServer2
{
    public class Echo : WebSocketBehavior
    {
        protected override void OnMessage(MessageEventArgs e)
        {
            int x = 0;
            Console.WriteLine("Received message from Echo client: " + e.Data);
            while (true)
            {
                Send(x.ToString());
                x++;
                Thread.Sleep(1000);

            }
            Send(e.Data);
        }
    }

    public class EchoAll : WebSocketBehavior
    {
        protected override void OnMessage(MessageEventArgs e)
        {
            Console.WriteLine("Received message from EchoAll client: " + e.Data);
            Sessions.Broadcast(e.Data);
        }
    }


    class Program
    {
        static void Main(string[] args)
        {
            WebSocketServer wssv = new WebSocketServer("ws://0.0.0.0:7890");

            wssv.AddWebSocketService<Echo>("/Echo");
            wssv.AddWebSocketService<EchoAll>("/EchoAll");

            wssv.Start();
            Console.WriteLine("WS server started on ws://127.0.0.1:7890/Echo");
            Console.WriteLine("WS server started on ws://127.0.0.1:7890/EchoAll");

            Console.ReadKey();
            wssv.Stop();
        }
    }
}
