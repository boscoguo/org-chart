import { render, screen, fireEvent } from "@testing-library/react";
import ChartNode from "./ChartNode";
import userEvent from "@testing-library/user-event";
import { async } from "rxjs";

describe("<ChartNode />", () => {

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

  it("should render employees information on the page when page loading", () => {
    render(<ChartNode datasource={ds} NodeTemplate={null} draggable={true} changeHierarchy={jest.fn} />)
    const employeeOneAtavar = screen.getByAltText(/Samuel/);
    expect(employeeOneAtavar).toBeInTheDocument;
    const employeeOne = screen.getByTestId("employee-info-1");
    expect(employeeOne).toBeInTheDocument;
    const employeeTwoAtavar = screen.getByAltText(/John/);
    expect(employeeTwoAtavar).toBeInTheDocument;
    const employeeTwo = screen.getByTestId("employee-info-2");
    expect(employeeTwo).toBeInTheDocument;
    const employeeThreeAtavar = screen.getByAltText(/Hannah/);
    expect(employeeThreeAtavar).toBeInTheDocument;
    const employeeThree = screen.getByTestId("employee-info-3");
    expect(employeeThree).toBeInTheDocument;
    const employeeFourAtavar = screen.getByAltText(/Zoe/);
    expect(employeeFourAtavar).toBeInTheDocument;
    const employeeFour = screen.getByTestId("employee-info-4");
    expect(employeeFour).toBeInTheDocument;
    const employeeFiveAtavar = screen.getByAltText(/Francis/);
    expect(employeeFiveAtavar).toBeInTheDocument;
    const employeeFive = screen.getByTestId("employee-info-5");
    expect(employeeFive).toBeInTheDocument;
    const employeeSixAtavar = screen.getByAltText(/Daniel/);
    expect(employeeSixAtavar).toBeInTheDocument;
    const employeeSix = screen.getByTestId("employee-info-6");
    expect(employeeSix).toBeInTheDocument;
  })

  it("should show the related background color when mouse over", () => {
    render(<ChartNode datasource={ds} NodeTemplate={null} draggable={true} changeHierarchy={jest.fn} />)
    const employeeOne = screen.getByTestId("employee-info-1");
    userEvent.hover(employeeOne);
    async () => {
      const hoverEmployeeOne = await screen.findByTestId("employee-info-1");
      expect(hoverEmployeeOne).toBeInTheDocument;
      expect(hoverEmployeeOne).toHaveStyle(`background: rgba(227, 5, 19, 0.07);`);
    }
    const employeeTwo = screen.getByTestId("employee-info-2");
    userEvent.hover(employeeTwo);
    async () => {
      const hoverEmployeeTwo = await screen.findByTestId("employee-info-2");
      expect(hoverEmployeeTwo).toBeInTheDocument;
      expect(hoverEmployeeTwo).toHaveStyle(`background: rgba(227, 5, 19, 0.07);`);
    }
    const employeeThree = screen.getByTestId("employee-info-3");
    userEvent.hover(employeeThree);
    async () => {
      const hoverEmployeeThree = await screen.findByTestId("employee-info-3");
      expect(hoverEmployeeThree).toBeInTheDocument;
      expect(hoverEmployeeThree).toHaveStyle(`background: rgba(227, 5, 19, 0.07);`);
    }
    const employeeFour = screen.getByTestId("employee-info-4");
    userEvent.hover(employeeFour);
    async () => {
      const hoverEmployeeFour = await screen.findByTestId("employee-info-4");
      expect(hoverEmployeeFour).toBeInTheDocument;
      expect(hoverEmployeeFour).toHaveStyle(`background: rgba(227, 5, 19, 0.07);`);
    }
    const employeeFive = screen.getByTestId("employee-info-5");
    userEvent.hover(employeeFive);
    async () => {
      const hoverEmployeeFive = await screen.findByTestId("employee-info-5");
      expect(hoverEmployeeFive).toBeInTheDocument;
      expect(hoverEmployeeFive).toHaveStyle(`background: rgba(227, 5, 19, 0.07);`);
    }
    const employeeSix = screen.getByTestId("employee-info-6");
    userEvent.hover(employeeSix);
    async () => {
      const hoverEmployeeSix = await screen.findByTestId("employee-info-6");
      expect(hoverEmployeeSix).toBeInTheDocument;
      expect(hoverEmployeeSix).toHaveStyle(`background: rgba(227, 5, 19, 0.07);`);
    }
  })

  it("should show drop zone when node is dragged", () => {
    render(<ChartNode datasource={ds} NodeTemplate={null} draggable={true} changeHierarchy={jest.fn} />)
    const employeeOne = screen.getByTestId("employee-info-1");
    fireEvent.drop(employeeOne, { dataTransfer: { test: true } });
    async() => {
      const employeeTwo = await screen.findByTestId("employee-info-2");
      const employeeThree = await screen.findByTestId("employee-info-3");
      const employeeFour = await screen.findByTestId("employee-info-4");
      const employeeFive = await screen.findByTestId("employee-info-5");
      const employeeSix = await screen.findByTestId("employee-info-6");
      expect(employeeTwo).toHaveStyle(`box-shadow: 0px 0px 6px #e4e4e4; border-bottom: 2px solid #E30513;`);
      expect(employeeThree).toHaveStyle(`box-shadow: 0px 0px 6px #e4e4e4; border-bottom: 2px solid #E30513;`);
      expect(employeeFour).toHaveStyle(`box-shadow: 0px 0px 6px #e4e4e4; border-bottom: 2px solid #E30513;`);
      expect(employeeFive).toHaveStyle(`box-shadow: 0px 0px 6px #e4e4e4; border-bottom: 2px solid #E30513;`);
      expect(employeeSix).toHaveStyle(`box-shadow: 0px 0px 6px #e4e4e4; border-bottom: 2px solid #E30513;`);
    }

    const employeeTwo = screen.getByTestId("employee-info-2");
    fireEvent.drop(employeeTwo, {DataTransfer: {test: true}});
    async() => {
      const employeeOne = await screen.findByTestId("employee-info-1");
      const employeeThree = await screen.findByTestId("employee-info-3");
      const employeeFour = await screen.findByTestId("employee-info-4");
      const employeeFive = await screen.findByTestId("employee-info-5");
      const employeeSix = await screen.findByTestId("employee-info-6");
      expect(employeeOne).toHaveStyle(`border: 2px dashed #DADADA;`);
      expect(employeeThree).toHaveStyle(`box-shadow: 0px 0px 6px #e4e4e4; border-bottom: 2px solid #E30513;`);
      expect(employeeFour).toHaveStyle(`border: 2px dashed #DADADA;`);
      expect(employeeFive).toHaveStyle(`border: 2px dashed #DADADA;`);
      expect(employeeSix).toHaveStyle(`border: 2px dashed #DADADA;`);
    }
  })
})