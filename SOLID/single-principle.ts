// this would be some app consts
const consts = {
  api_v1: "https://example:2344"
}

interface Employee {

}
interface HttpClient<T> {
  // some http library
  post(url: string, payload: T): Promise<void>
  get(url: string): Promise<T[]>
}

async function getEmployees(httpClient: HttpClient<Employee>, filters): Promise<Employee[]> {
  try {
    let employees: Employee[] = await httpClient.get(`${consts.api_v1}/employees`);
    employees = applyFilters(employees);
    return employees
  } catch (error) {
    handleError(error);
  }
}

function handleError(msg: string): string {
  // addional error logic
  const messageBox = new MessageBox();
  return messageBox.show(msg)
}

function applyFilters(data: Employee[]): Employee[] {
  // some filtering logic
  return data;
}


class MessageBox {
  show(msg: string): string {
    return msg;
  }
}