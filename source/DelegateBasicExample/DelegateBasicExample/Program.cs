namespace DelegateBasicExample
{
	internal class Program
	{

		delegate void LogDel(string text);
		static void Main(string[] args)
		{
			Log log = new Log();

			LogDel LogTextToScreenDel, LogTexTtoFileDel;

			LogTextToScreenDel = new LogDel(log.LogTextToScreen);

			LogTexTtoFileDel = new LogDel(log.LogTextToFile);

			LogDel multiLogDel = LogTextToScreenDel + LogTexTtoFileDel;

			Console.WriteLine("Please enter your name");

			var name = Console.ReadLine();

			LogText(LogTexTtoFileDel, name);

			Console.ReadKey();
		}

		static void LogText(LogDel logDel, string text)
		{
			logDel(text);
		}

		
	}

	public class Log
	{
		public void LogTextToScreen(string text)
		{
			Console.WriteLine($"{DateTime.Now}: {text}");

		}

		public void LogTextToFile(string text)
		{
			using (StreamWriter sw = new StreamWriter(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Log.txt"), true))
			{
				sw.WriteLine($"{DateTime.Now}: {text}");
			}
		}
	}
}
