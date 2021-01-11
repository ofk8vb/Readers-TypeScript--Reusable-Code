import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
    <div>
      <h1>Analysis Output</h1>
      <div>${report}</div>
    </div>
    `;

    // filename can be written as an constructor argument
    fs.writeFileSync('report.html', html);
  }
}
