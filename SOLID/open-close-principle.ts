import { HttpClient } from '.';

class ErrorHandler {
  public async wrapError(err, publicResponse, severity): Promise<any> {
    // handle logic
    return await {
      publicResponse, severity
    }
  }
}
class ErrorLogger {
  private _endpoint: string = "api/log";

  constructor(private _httpClient: HttpClient<any>) {

  }

  async logError(errorObject: Object): Promise<void> {
    await this._httpClient.post(this._endpoint, errorObject)
  }
}
export class ErrorHandlingWithLogging extends ErrorHandler {
  private _logger: ErrorLogger;

  constructor(logger: ErrorLogger) {
    super();
    this._logger = logger;
  }

  wrapError(err, publicResponse, severity): Promise<any> {
    return this._logger.logError(err).then(() => {
      super.wrapError(err, publicResponse, severity)
    })
  }
  
} 


