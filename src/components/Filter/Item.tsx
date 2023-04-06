import { FC, useState } from "react";

const Item: FC<any> = ({ item, onClick }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (val: string) => {
    setChecked(!checked);
    onClick(val);
  };

  return (
    <label>
      <input
        checked={checked}
        type='checkbox'
        onChange={handleChange.bind(null, item.manufacturer)}
      />
      {`${item.manufacturer} (${item.count})`}
    </label>
  );
};

export default Item;
