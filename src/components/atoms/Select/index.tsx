type Props = {
  name: string;
  value: string;
  selectList: string[];
  onEventCallBack: Function;
};

const Select = (props: Props) => {
  return (
    <select
      name={props.name}
      value={props.value}
      className="w-[150px] h-full border-2 rounded-lg border-slate-900 text-2xl text-center"
      onChange={(e) => props.onEventCallBack(e.target.value)}
    >
      {props.selectList?.map((el) => {
        return (
          <option key={el} value={el}>
            {Number(el)}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
