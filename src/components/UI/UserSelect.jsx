const UserSelect = ({ opt, name, id, handleChange, defaultValue, value }) => {
  return (
    <>
      <select
        name={name}
        id={id}
        onChange={handleChange}
        value={value && value}
        className="user-select"
      >
        {defaultValue && <option value="">{defaultValue}</option>}
        {opt.length &&
          opt.map((item) => (
            <option key={`${item.value}${opt.length++}`} value={item.value}>
              {item.name}
            </option>
          ))}
      </select>
    </>
  );
};

export default UserSelect;
