import Select from "react-select";

const TagInput = ({ tags, setTags }) => {
  const handleChange = (selectedOptions) => {
    setTags(selectedOptions.map((option) => option.value));
  };

  const options = [
    { value: "tag1", label: "Tag 1" },
    { value: "tag2", label: "Tag 2" },
    { value: "tag3", label: "Tag 3" },
  ];

  return (
    <Select
      isMulti
      value={tags.map((tag) => ({ value: tag, label: tag }))}
      options={options}
      onChange={handleChange}
    />
  );
};

export default TagInput;
