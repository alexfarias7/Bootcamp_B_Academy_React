function Toast({ message, children }) {
  return (
    <>
      <div className={message?'show':'hidden'} data-js="error"></div>
      {children}
    </>
  );
}

export { Toast };
