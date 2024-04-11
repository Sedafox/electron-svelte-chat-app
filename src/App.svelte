<script>
  let messages = [
    { sender: "User1", text: "Hello!" },
    { sender: "User2", text: "Hi, how are you?" },
    // Add more messages here...
  ];
  let newMessage = "";

  function sendMessage() {
    messages.push({ sender: "User1", text: newMessage });
    newMessage = "";
  }
</script>

<main>
  <div id="message-list">
    {#each messages as message (message.text)}
      <div class="message">
        <strong>{message.sender}:</strong>
        {message.text}
      </div>
    {/each}
  </div>

  <div id="message-input">
    <input bind:value={newMessage} placeholder="Type a message..." />
    <button on:click={sendMessage}>Send</button>
  </div>
</main>

<style>
  #message-list {
    height: 80vh;
    overflow-y: scroll;
  }
  .message {
    margin-bottom: 1em;
  }
  #message-input {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
</style>
