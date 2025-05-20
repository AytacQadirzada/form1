import { useState } from 'react';
import sidebar from '../assets/bg-sidebar-desktop.svg';
import arcade from '../assets/icon-arcade.svg';
import advanced from '../assets/icon-advanced.svg';
import pro from '../assets/icon-pro.svg';

const Forms = () => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('arcade');
  const [isYearly, setIsYearly] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);




  return (
    <div className='bg-[#EEF5FF] h-[100vh] flex items-center justify-center'>
      <div className="w-[60vw] h-[82vh] bg-white rounded-[10px] !p-[15px] flex relative">
        <div>
          <div className='absolute'>
            <img src={sidebar} alt="sidebar" />
          </div>
          <div className='relative flex flex-col gap-[40px] !p-[20px]'>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className='flex gap-[10px] items-center'>
                <div className={`w-[40px] h-[40px] ${step === num ? 'bg-[#BDE2FE]' : 'bg-white'} flex items-center justify-center rounded-full font-semibold`}>
                  {num}
                </div>
                <div className='text-white text-[15px]'>
                  <div className='!text-[#BDE2FE] font-[300]'>STEP {num}</div>
                  <div className='font-[500] w-[100px]'>
                    {num === 1 ? 'YOUR INFO' :
                      num === 2 ? 'SELECT PLAN' :
                        num === 3 ? 'ADD-ONS' : 'SUMMARY'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='!ml-[180px] !mt-[40px] w-full'>
          {step === 1 && (
            <div>
              <h1 className='text-[#00183B] font-bold text-3xl tracking-wide !mb-[8px]'>Personal info</h1>
              <h2 className='text-[#cac9cc] !mb-[30px]'>Please provide your name, email address, and phone number.</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                setStep(2);
              }}>
                <div className='!mb-[15px]'>
                  <label className='flex flex-col gap-[10px] text-[#00183B]'>
                    Name
                    <input required type="text" className='w-[450px] h-[50px] border-2 !pl-[20px] rounded-[10px] border-[#E5E4E8]' placeholder='e.g. Stephen King' />
                  </label>
                </div>
                <div className='!mb-[15px]'>
                  <label className='flex flex-col gap-[10px] text-[#00183B]'>
                    Email Address
                    <input required type="email" className='w-[450px] h-[50px] border-2 !pl-[20px] rounded-[10px] border-[#E5E4E8]' placeholder='e.g.stephenking@lorem.com' />
                  </label>
                </div>
                <div className='!mb-[15px]'>
                  <label className='flex flex-col gap-[10px] text-[#00183B]'>
                    Phone Number
                    <input required type="text" className='w-[450px] h-[50px] border-2 !pl-[20px] rounded-[10px] border-[#E5E4E8]' placeholder='e.g. +1 234 567 890' />
                  </label>
                </div>
                <div className='flex justify-end !mt-[80px]'>
                  <input type='submit' value='Next Step' className='bg-[#03295A] text-white !px-[10px] !py-[8px] rounded-[7px]' />
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div>
              <h1 className='text-[#00183B] font-bold text-3xl tracking-wide mb-[20px]'>Select your plan</h1>
              <p className='text-[#cac9cc] !mb-[30px]'>You have the option of monthly or yearly billing.</p>
              <div className='flex gap-[10px]'>
                <div
                  onClick={() => setSelectedPlan('arcade')}
                  className={`cursor-pointer flex flex-col !pl-[15px] !pt-[20px] gap-[40px] w-[140px] h-[160px] rounded-[10px] border-2 ${selectedPlan === 'arcade' ? 'bg-[#EEF5FF] border-[#083f8d]' : 'border-[#E5E4E8]'
                    }`}
                >
                  <img className='w-[40px]' src={arcade} alt="arcade" />
                  <div>
                    <h3 className='font-semibold'>Arcade</h3>
                    <p className='text-[#cac9cc]'>$9/mo</p>
                  </div>
                </div>

                <div
                  onClick={() => setSelectedPlan('advanced')}
                  className={`cursor-pointer flex flex-col !pl-[15px] !pt-[20px] gap-[40px] w-[140px] h-[160px] rounded-[10px] border-2 ${selectedPlan === 'advanced' ? 'bg-[#EEF5FF] border-[#083f8d]' : 'border-[#E5E4E8]'
                    }`}
                >
                  <img className='w-[40px]' src={advanced} alt="advanced" />
                  <div>
                    <h3 className='font-semibold'>Advanced</h3>
                    <p className='text-[#cac9cc]'>$12/mo</p>
                  </div>
                </div>

                <div
                  onClick={() => setSelectedPlan('pro')}
                  className={`cursor-pointer flex flex-col !pl-[15px] !pt-[20px] gap-[40px] w-[140px] h-[160px] rounded-[10px] border-2 ${selectedPlan === 'pro' ? 'bg-[#EEF5FF] border-[#083f8d]' : 'border-[#E5E4E8]'
                    }`}
                >
                  <img className='w-[40px]' src={pro} alt="pro" />
                  <div>
                    <h3 className='font-semibold'>Pro</h3>
                    <p className='text-[#cac9cc]'>$15/mo</p>
                  </div>
                </div>
              </div>
              <div className='bg-[#EEF5FF] w-[440px] h-[45px] !mt-[20px] rounded'>
                <div className="bg-[#EEF5FF] w-[440px] h-[45px] !mt-[20px] !pt-[10px] rounded-[10px]">
  <div className="flex items-center justify-center gap-4">
    <span className={`${!isYearly ? 'text-[#03295A]' : 'text-[#cac9cc]'} font-medium transition-colors duration-300`}>
      Monthly
    </span>

    <div
      onClick={() => setIsYearly(!isYearly)}
      className={`w-[50px] h-[26px] flex items-center bg-[#03295A] rounded-full px-[4px] cursor-pointer duration-300 ease-in-out ${
        isYearly ? 'justify-end' : 'justify-start'
      }`}
    >
      <div className="w-[18px] h-[18px] bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out" />
    </div>

    <span className={`${isYearly ? 'text-[#03295A]' : 'text-[#cac9cc]'} font-medium transition-colors duration-300`}>
      Yearly
    </span>
  </div>
</div>

              </div>

              <div className='flex justify-between !mt-[150px]'>
                <button onClick={() => setStep(1)} className='bg-gray-300 text-[#03295A] !px-[10px] !py-[8px] rounded-[7px]'>Go Back</button>
                <button onClick={() => setStep(3)} className='bg-[#03295A] text-white !px-[10px] !py-[8px] rounded-[7px]'>Next Step</button>
              </div>
            </div>
          )}

         {step === 3 && (
  <div>
    <h1 className='text-[#00183B] font-bold text-3xl tracking-wide mb-[10px]'>Pick add-ons</h1>
    <p className='text-[#888] mb-[25px]'>Add-ons help enhance your gaming experience.</p>

    <div className='flex flex-col gap-[10px] !mt-[50px]'>
      {[
        {
          id: 'online',
          title: 'Online service',
          desc: 'Access to multiplayer games',
          price: '+$1/mo'
        },
        {
          id: 'storage',
          title: 'Larger storage',
          desc: 'Extra 1TB of cloud save',
          price: '+$2/mo'
        },
        {
          id: 'profile',
          title: 'Customizable profile',
          desc: 'Custom theme on your profile',
          price: '+$2/mo'
        }
      ].map((item) => (
        <label
          key={item.id}
          className={`flex items-center justify-between border rounded-lg !p-4 cursor-pointer ${
            selectedAddons.includes(item.id)
              ? 'border-[#03295A] bg-[#F8F9FE]'
              : 'border-gray-300'
          }`}
        >
          <div className='flex items-center gap-4'>
            <input
              type='checkbox'
              checked={selectedAddons.includes(item.id)}
              onChange={() =>
                setSelectedAddons((prev) =>
                  prev.includes(item.id)
                    ? prev.filter((x) => x !== item.id)
                    : [...prev, item.id]
                )
              }
              className='w-5 h-5 accent-[#03295A]'
            />
            <div>
              <h3 className='text-[#00183B] font-semibold'>{item.title}</h3>
              <p className='text-sm text-[#888]'>{item.desc}</p>
            </div>
          </div>
          <div className='text-[#03295A] font-medium'>{item.price}</div>
        </label>
      ))}
    </div>

    <div className='flex justify-between !mt-[110px]'>
      <button
        onClick={() => setStep(2)}
        className='text-[#888] hover:text-[#03295A] font-medium'
      >
        Go Back
      </button>
      <button
        onClick={() => {
          if (selectedAddons.length > 0) {
            setStep(4);
          }
        }}
        className={`px-6 py-2 rounded-md font-medium ${
          selectedAddons.length === 0
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed !px-[10px] !py-[8px] rounded-[7px]'
            : 'bg-[#03295A] text-white !px-[10px] !py-[8px] rounded-[7px]'
        }`}
        disabled={selectedAddons.length === 0}
      >
        Next Step
      </button>
    </div>
  </div>
)}

         {step === 4 && (
  <div>
    <h1 className='text-[#00183B] font-bold text-3xl tracking-wide !mb-[10px]'>Finishing up</h1>
    <p className='text-[#888] !mb-[25px]'>Double-check everything looks OK before confirming.</p>

    <div className="bg-[#F8F9FE] rounded-lg !p-5">
      {/* Plan info */}
      <div className="flex justify-between items-center border-b !pb-4 !mb-4">
        <div>
          <p className="text-[#00183B] font-semibold capitalize">
            {selectedPlan} ({isYearly ? 'Yearly' : 'Monthly'})
          </p>
          <button
            onClick={() => setStep(2)}
            className="text-[#888] underline text-sm hover:text-[#03295A] !mt-1"
          >
            Change
          </button>
        </div>
        <p className="text-[#00183B] font-bold">
          {selectedPlan === 'arcade'
            ? isYearly ? '$90/yr' : '$9/mo'
            : selectedPlan === 'advanced'
            ? isYearly ? '$120/yr' : '$12/mo'
            : isYearly ? '$150/yr' : '$15/mo'}
        </p>
      </div>

      {/* Add-ons */}
      {selectedAddons.map((addon) => {
        const addonData = {
          online: { label: 'Online service', price: isYearly ? '+$10/yr' : '+$1/mo' },
          storage: { label: 'Larger storage', price: isYearly ? '+$20/yr' : '+$2/mo' },
          profile: { label: 'Customizable profile', price: isYearly ? '+$20/yr' : '+$2/mo' }
        }[addon];

        if (!addonData) return null;

        return (
          <div key={addon} className="flex justify-between !mb-2">
            <p className="text-[#888] text-sm">{addonData.label}</p>
            <p className="text-[#00183B] text-sm">{addonData.price}</p>
          </div>
        );
      })}
    </div>

    {/* Total */}
    <div className="flex justify-between !mt-6 !px-2">
      <p className="text-[#888]">
        Total ({isYearly ? 'per year' : 'per month'})
      </p>
      <p className="text-[#483EFF] font-bold">
        {
          (() => {
            const planPrice =
              selectedPlan === 'arcade'
                ? isYearly ? 90 : 9
                : selectedPlan === 'advanced'
                ? isYearly ? 120 : 12
                : isYearly ? 150 : 15;

            const addonTotal = selectedAddons.reduce((acc, id) => {
              const prices: Record<'online' | 'storage' | 'profile', number> = {
                online: isYearly ? 10 : 1,
                storage: isYearly ? 20 : 2,
                profile: isYearly ? 20 : 2
              };
              return acc + (prices[id as 'online' | 'storage' | 'profile'] || 0);
            }, 0);

            return `+$${planPrice + addonTotal}/${isYearly ? 'yr' : 'mo'}`;
          })()
        }
      </p>
    </div>

    {/* Buttons */}
    <div className="flex justify-between !mt-[150px]">
      <button
        onClick={() => setStep(3)}
        className="text-[#888] hover:text-[#03295A] font-medium"
      >
        Go Back
      </button>
      <button
        onClick={() => alert('Confirmed!')}
        className="bg-[#483EFF] text-white !px-6 !py-2 rounded-md font-medium hover:bg-[#3b3cd9]"
      >
        Confirm
      </button>
    </div>
  </div>
)}


        </div>
      </div>
    </div>
  );
};

export default Forms;
