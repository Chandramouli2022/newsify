const InputLabel = ({ htmlFor, type, placeholder, children, isTextArea }) => {
    return (
      <div className="input-label">
        <label htmlFor={htmlFor}>{children}</label>
        {isTextArea ? (
          <textarea placeholder={placeholder} id={htmlFor}></textarea>
        ) : (
          <input type={type} placeholder={placeholder} id={htmlFor} />
        )}
      </div>
    );
  };
  export default InputLabel;