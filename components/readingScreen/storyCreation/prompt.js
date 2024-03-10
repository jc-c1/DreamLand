const Prompt = (option, generateNext) => {
  return <Button onPress={generateNext}>{option}</Button>;
};
