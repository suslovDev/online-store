import { screen, render } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination.tsx: ", () => {
    it("количество кнопок постраничного перехода соответсвует логики компонента", () => {
        render(<Pagination products={[1,2]} perPage={1} onShowSlice={() =>{}}/>);
        expect(screen.getByText(/2/))
    })
})