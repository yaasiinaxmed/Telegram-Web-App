
function Header() {
  return (
    <header className="fixed top-0 left-0 bg-[#fff] w-full h-[60px] flex justify-between items-center p-4">
        <img src="./logo.png" alt="lototobit" className='w-[80px]'/>
        <button className='px-6 py-2 flex items-center justify-center h-[40px] rounded-lg bg-[#2c268a] text-white transation-all hover:scale-105'>Connect</button>
    </header>
  )
}

export default Header
