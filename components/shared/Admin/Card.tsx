
const Card = ({
  title,
  icon,
  count,
}: {
  title: string;
  icon: React.ReactNode;
  count: number;
}) => {
  return (
    <div className='  h-64 w-64 border border-slate-800 rounded flex items-center justify-between  flex-col '>
      <div className=' flex items-center justify-between  w-full p-5'>
        <h1 className=' text-2xl'>{title}:</h1>
        {icon}
      </div>
      <div className=' text-7xl pb-5  '>{count}</div>
    </div>
  );
};

export default Card;
