import { Tab } from "@headlessui/react";

const groomsMen = [
  { name: "Julian Bernard", img: "/julian.png" },
  { name: "Damán Haber", img: "/daman.png" },
  { name: "Patrik Pavone", img: "/patrik.png" },
  { name: "David Tatum", img: "/david.png" },
];

const brideMaids = [
  { name: "Julian Bernard", img: "/julian.png" },
  { name: "Damán Haber", img: "/daman.png" },
  { name: "Patrik Pavone", img: "/patrik.png" },
  { name: "David Tatum", img: "/david.png" },
];

function BridalParty() {
  return (
    <div>
      <Tab.Group
        as="div"
        className="flex flex-col lg:flex-row px-20 gap-20  py-[96px]"
      >
        <Tab.List
          as="div"
          className={
            "flex-row justify-center lg:justify-start lg:flex-col  flex gap-3"
          }
        >
          {["Groomsmen", "Bridemaids"].map((item) => (
            <Tab>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={selected ? "border-b-2 border-secondary" : ""}
                >
                  {item}
                </button>
              )}
            </Tab>
          ))}

          {/* <Tab>Tab 3</Tab> */}
        </Tab.List>
        <Tab.Panels as="div" className="flex-1">
          <Tab.Panel>
            <div className="flex gap-[64px] flex-wrap justify-around">
              {groomsMen.map((item) => (
                <div>
                  <img className="block" src={item.img} alt={item.name} />
                  <div className="text-center text-2xl mt-6">{item.name}</div>
                </div>
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex gap-[64px] flex-wrap justify-around">
              {brideMaids.map((item) => (
                <div>
                  <img className="block" src={item.img} alt={item.name} />
                  <div className="text-center text-2xl mt-6">{item.name}</div>
                </div>
              ))}
            </div>
          </Tab.Panel>
          {/* <Tab.Panel>Content 3</Tab.Panel> */}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default BridalParty;
