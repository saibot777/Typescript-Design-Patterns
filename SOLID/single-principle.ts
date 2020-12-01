function handleError(msg: string): string {
  let messageBox = new MessageBox();
  return messageBox.show(msg)
}

class MessageBox {
  show(msg): string {
    return msg;
  }
}