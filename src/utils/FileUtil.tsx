export class FileUtil {
  public static saveTextToFile = (
    text: string,
    fileName: string = 'drawson'
  ) => {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = fileName + '.dson';
    document.body.appendChild(element);
    element.click();
  };
}
