import CustomButton from './CustomButton';

const ButtonContainer = ({ style, className, text, onClick }) => {
  return (
    <div style={{
      position: 'absolute',
      transform: 'translateY(-50%)',
      zIndex: 2999,
      ...style
    }} className={className}>
      <CustomButton
        text={text}
        onClick={onClick}
      />
    </div>
  );
};

export default ButtonContainer; 