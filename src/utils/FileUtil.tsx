export class FileUtil {
  public static saveTextToFile = (
    text: string,
    fileName: string = 'drawson.txt'
  ) => {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
  };
}
