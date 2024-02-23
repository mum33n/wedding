import { Tab } from "@headlessui/react";

const items = [
  {
    time: "10am",
    items: [
      {
        title: "Item Title",
        description:
          "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
      },
    ],
  },
  {
    time: "10am",
    items: [
      {
        title: "Item Title",
        description:
          "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
      },
    ],
  },
  {
    time: "10am",
    items: [
      {
        title: "Item Title",
        description:
          "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
      },
    ],
  },
];

function Itinerary() {
  return (
    <div className="py-[96px] w-4/5 mx-auto">
      <div className="text-center text-5xl  mb-[64px]">Itinerary</div>
      <Tab.Group>
        <Tab.List className="mx-auto flex justify-around w-full">
          {["Friday, July 11", "Saturday, July 12", "Sunday, July 13"].map(
            (item) => (
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
            )
          )}
        </Tab.List>
        <Tab.Panels>
          {items.map((item) => (
            <Tab.Panel>
              <div className="flex flex-col lg:flex-row mt-[64px] items-start">
                <div className="lg:w-1/3 text-secondary text-[24px]">
                  {item.time}
                </div>
                <div>
                  {item.items.map((item, index) => (
                    <div
                      className={`text-primary lg:w-2/3 ${
                        index !== 0 && "mt-[64px]"
                      }`}
                    >
                      <div className="text-[32px] mb-8">{item.title}</div>
                      <div>{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Tab.Panel>
          ))}
          {/* <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel> */}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Itinerary;
