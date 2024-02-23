const InputTitle = ({ text }) => {
  return (
    <div>
      {text}
      <span className="text-secondary">*</span>
    </div>
  );
};
const Input = (props) => {
  return (
    <input
      className="border-[1px] border-primary block w-full py-3 px-2"
      {...props}
    ></input>
  );
};
function RSVP() {
  return (
    <div
      className="mt-12 flower relative z-10 py-10 lg:py-[96px] w-[90%] lg:w-3/5 mx-auto"
      // style={{
      //   backgroundImage: 'url("/Frame.png")',
      //   backgroundPositionX: "center",
      //   backgroundPositionY: "100px",
      //   backdropFilter: "blur(10px)",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "contain",
      //   // backgroundColor: "rgba(255, 255, 255, 0.5)",
      //   opacity: "0.1",
      // }}
    >
      <div className="text-center text-[56px] mb-16">RSVP</div>
      <div className="text-[18px] mb-16">
        Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut
        in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu
        euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim
        adipiscing sem.
      </div>
      <div className="flex gap-20 gap-y-3 flex-wrap w-4/5 mx-auto">
        <div className="w-full lg:w-2/5">
          <InputTitle text="First Name" />
          <Input />
        </div>
        <div className="w-full lg:w-2/5">
          <InputTitle text="Last Name" />
          <Input />
        </div>
        <div className="w-full">
          <InputTitle text="Email Address" />
          <Input />
        </div>
        <div className="w-full">
          <InputTitle text="Number of guests" />
          <div className="flex flex-wrap gap-y-3  justify-between">
            <div className="px-2 py-3 border-[1px] md:w-[46%] border-primary lg:md:w-[46%]  w-full lg:w-1/5">
              <input type="radio" value="" name="guests" id="optionOne" />
              <label for="optionOne" className="ml-2">
                One
              </label>
            </div>

            <div className="px-2 py-3 border-[1px] border-primary md:w-[46%]  w-full lg:w-1/5">
              <input type="radio" value="" name="guests" id="optionTwo" />
              <label for="optionOne" className="ml-2">
                Two
              </label>
            </div>
            <div className="px-2 py-3 border-[1px] border-primary md:w-[46%]  w-full lg:w-1/5">
              <input type="radio" value="" name="guests" id="optionThree" />
              <label for="optionOne" className="ml-2">
                Three
              </label>
            </div>
            <div className="px-2 py-3 border-[1px] border-primary md:w-[46%]  w-full lg:w-1/5">
              <input type="radio" value="" name="guests" id="optionFour" />
              <label for="optionOne" className="ml-2">
                Four
              </label>
            </div>
          </div>
        </div>
        <div className="w-full">
          <InputTitle text="Attendance" />
          <div className="flex justify-between flex-wrap gap-3">
            <div className="pl-2 py-3 border-[1px] border-primary md:w-[46%] w-full lg:w-1/5">
              <input type="checkbox" value="" name="guests" id="optionOne" />
              <label for="optionOne" className="ml-2">
                Accept with pleasure
              </label>
            </div>

            <div className="pl-2 py-3 border-[1px] border-primary md:w-[46%] w-full lg:w-1/5">
              <input type="radio" value="" name="guests" id="optionTwo" />
              <label for="optionOne" className="ml-2">
                Regretfully Decline
              </label>
            </div>
            <div className="pl-2 py-3 border-[1px] border-primary md:w-[46%] w-full lg:w-1/5">
              <input type="radio" value="" name="guests" id="optionThree" />
              <label for="optionOne" className="ml-2">
                Rehearsal Dinner
              </label>
            </div>
            <div className="pl-2 py-3 border-[1px] border-primary w-[45%]">
              <input type="radio" value="" name="guests" id="optionFour" />
              <label for="optionOne" className="ml-2">
                Ceremony
              </label>
            </div>
            <div className="pl-2 py-3 border-[1px] border-primary w-[45%]">
              <input type="radio" value="" name="guests" id="optionFour" />
              <label for="optionOne" className="ml-2">
                Reception
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RSVP;
