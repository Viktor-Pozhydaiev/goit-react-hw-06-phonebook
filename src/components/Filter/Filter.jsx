export const Filter = ({ value, onSearch }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onSearch} />
    </label>
  );
};
