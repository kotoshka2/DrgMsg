using Microsoft.AspNetCore.SignalR;

namespace DrgMsg.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string UserName,  string Message)
        {
            Clients.All.SendAsync("ReceiveMessage",UserName, Message);
        }
    }
}
