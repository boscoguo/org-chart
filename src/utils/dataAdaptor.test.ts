import { attachRel } from "./dataAdaptor";

describe("when initail data loading", () => {
  const ds = {
    id: 1,
    name: "Samuel",
    position: "CTO",
    image: "https://fetest-organigram.s3.ap-southeast-2.amazonaws.com/images/samuel.svg",
    reports: [
      {
        id: 2,
        name: "John",
        position: "Principal Developer",
        image: "https://fetest-organigram.s3.ap-southeast-2.amazonaws.com/images/john.svg",
        reports: [
          {
            id: 3,
            name: "Hannah",
            position: "Backend Developer",
            image: "https://fetest-organigram.s3.ap-southeast-2.amazonaws.com/images/hannah.svg",
            reports: [] as any
          }
        ]
      },
      {
        id: 4,
        name: "Zoe",
        position: "Principal Developer",
        image: "https://fetest-organigram.s3.ap-southeast-2.amazonaws.com/images/zoe.svg",
        reports: [
          {
            id: 5,
            name: "Francis",
            position: "Frontend Developer",
            image: "https://fetest-organigram.s3.ap-southeast-2.amazonaws.com/images/francis.svg",
            reports: []
          },
          {
            id: 6,
            name: "Daniel",
            position: "Frontend Developer",
            image: "https://fetest-organigram.s3.ap-southeast-2.amazonaws.com/images/daniel.svg",
            reports: []
          }
        ]
      }
    ]
  }
  it("should adapt a reasonable id and add unique relationship property", () => {
    expect(attachRel(ds, "00").id).toEqual("m1");
    expect(attachRel(ds, "00").relationship).toEqual("001");
  })
})