using System;
using System.IO;

namespace OverwritePxtOutput
{
    internal class Program
    {
        static void Main(string[] args)
        {
            if (args == null || args.Length == 0)
            {
                Console.WriteLine("0 : Overwrite PXT relates to colors pallete.");
                Console.WriteLine("1 : Overwrite path in gh-pages, and fix Icon");

            }
            else
            {

                switch (args[0])
                {
                    case "0":

                        if (args.Length > 1 && Directory.Exists(args[1]))
                        {
                            DoOverWritePxtOutput(args[1]);

                        }
                        else
                        {
                            Console.WriteLine("Error: Directory does not exist");
                        }
                        break;

                    case "1":
                        if (args.Length > 1 && Directory.Exists(args[1]))
                        {
                            if (args[1].IndexOf("gh-pages") < 0)
                            {
                                Console.WriteLine("Error: Option 1 only work in gh-pages folder.");

                                return;
                            }

                            var indexhtmlFiles = args[1] + @"\index.html";

                            if (!File.Exists(indexhtmlFiles))
                            {
                                Console.WriteLine("Error: No index.html file found.");

                                return;

                            }

                            DoReplacePathToHost(args[1]);

                        }
                        else
                        {
                            Console.WriteLine("Error: Directory does not exist");
                        }
                        break;

                    default:
                        Console.WriteLine("0 : Overwrite Pxt relate to colors pallete.");
                        Console.WriteLine("1 : Overwrite path in gh-pages, and fix Icon");
                        break;

                }

            }
        }

        static void DoOverWritePxtOutput(string folderPath)
        {
            var listFile = Directory.GetFiles(folderPath, "*.js", SearchOption.AllDirectories);
            var countFiles = 0;
            if (listFile != null)
            {
                foreach (var file in listFile)
                {

                    var text = File.ReadAllText(file);

                    var newText1 = text.Replace("selectedColor:3", "selectedColor:1");

                    var newText2 = newText1.Replace("x-mkcd-f4", "x-mkcd-f1");

                    if (newText2 != null && newText2.CompareTo(text) != 0)
                    {
                        Console.WriteLine("Changing.... " + file);
                        File.WriteAllText(file, newText2);
                        countFiles++;
                    }

                }
            }

            Console.WriteLine("Files changed: " + countFiles);
        }

        static void DoReplacePathToHost(string folderPath)
        {
            var listFile = Directory.GetFiles(folderPath, "*.*", SearchOption.AllDirectories);
            var countFiles = 0;

            if (listFile != null)
            {
                foreach (var file in listFile)
                {

                    var text = File.ReadAllText(file);

                    var newText1 = text.Replace("/brainpad-pulse/", "/");

                    var newText2 = newText1.Replace('"' + "static/", '"' + "docs/static/");
                    var newText3 = newText2.Replace('"' + "/static/", '"' + "docs/static/");
                    var newText4 = newText3.Replace("(../static/", "(docs/static/");

                    if (newText4 != null && newText4.CompareTo(text) != 0)
                    {
                        Console.WriteLine("Changing.... " + file);
                        File.WriteAllText(file, newText4);
                        countFiles++;
                    }

                }
            }

            Console.WriteLine("Files changed: " + countFiles);
            var indexhtmlFiles = folderPath + @"\index.html";

            var indexhtmlText = File.ReadAllText(indexhtmlFiles);

            var newIndexhtmlText1 = indexhtmlText.Replace("<link rel=" + '"' + "shortcut icon" + '"' + " href=" + '"' + '"' + ">", "<link rel=" + '"' + "shortcut icon" + '"' + " href=" + '"' + "docs/static/icons/favicon.ico" + '"' + ">");

            if (newIndexhtmlText1 != null && newIndexhtmlText1.CompareTo(indexhtmlText) != 0)
            {
                //File.WriteAllText(indexhtmlFiles, newIndexhtmlText1);
                Console.WriteLine("Fixed Icon " + indexhtmlFiles);

            }
            else
            {
                Console.WriteLine("Error: Could not fixed icon");
            }

            var findText = "<meta name=" + '"' + "viewport" + '"' + " content=" + '"' + "width=device-width,height=device-height,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0" + '"' + ">";
            var googleAnalytics = "<!-- Global site tag (gtag.js) - Google Analytics -->\n" +
"<script async src=" + '"' + "https://www.googletagmanager.com/gtag/js?id=G-WWZF1Q6WT0" + '"' + "></script>\n" +
"<script>\n" +
"   window.dataLayer = window.dataLayer || [];\n" +
"   function gtag(){dataLayer.push(arguments);}\n" +
"   gtag('js', new Date());\n" +

"   gtag('config', 'G-WWZF1Q6WT0');\n" +
"</script>\n";

            var newIndexhtmlText2 = newIndexhtmlText1.Replace(findText, findText + "\n" + googleAnalytics);

            if (newIndexhtmlText2 != null && newIndexhtmlText2.CompareTo(newIndexhtmlText1) != 0)
            {
                File.WriteAllText(indexhtmlFiles, newIndexhtmlText2);
                Console.WriteLine("Add google analytics " + indexhtmlFiles);

            }
            else
            {
                Console.WriteLine("Error: Could not add google analytics ");
            }
        }
    }
}
