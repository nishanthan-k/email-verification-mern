import PropTypes from 'prop-types';

const FormComp = (props) => {
  const { input, setInput, subBtnContent, setIsSubmitted } = props;

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = () => {
    setIsSubmitted(true);
  }


  return (
    <form>
      <input autoFocus type="text" value={input} onChange={handleInputChange} />
      <button className="sub-btn" disabled={!input} type="submit" onClick={handleSubmit}>
        {subBtnContent}
      </button>
    </form>
  );
};

export default FormComp;

FormComp.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  subBtnContent: PropTypes.string.isRequired,
  setIsSubmitted: PropTypes.func.isRequired,
};
