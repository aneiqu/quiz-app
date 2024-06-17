type propsType = {
  icon: string;
  title: string;
};

export default function Container({ icon, title }: propsType) {
  return (
    <div className='h-16 flex items-center bg-white dark:bg-navy rounded-xl p-3'>
      <div className='w-10 h-10 bg-[#FFF1E9] rounded-md flex items-center justify-center mr-6'>
        <img className='w-7' src={icon} alt='' />
      </div>
      <span>{title}</span>
    </div>
  );
}
