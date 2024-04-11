<script>
  import "@/App.css";
  let messages = [
    { sender: "User1", text: "Hello!" },
    { sender: "User2", text: "Hi, how are you?" },
  ];
  let newMessage = "";
  function sendMessage() {
    messages = [...messages, { sender: "user", text: newMessage }]; // Create a new array
    newMessage = "";
  }
</script>

<div class="app">
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
</div>
