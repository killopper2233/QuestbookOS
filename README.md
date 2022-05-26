# QuestbookOS
QuestbookOS is a web-based linux distro. It functions like Windows 8, but has some key components like ChromiumOS / Google ChromeOS.
The whole point of this is project to prove that anyone can make a desktop environment using HTML & Javascript and a little bit of C++ & C.

### Screenshots:

![Screenshot 2022-05-21 6 37 36 PM](https://user-images.githubusercontent.com/61961329/169674051-b4747b17-d11c-45a4-9c85-9582a5199b9c.png)

![Screenshot 2022-05-21 6 37 49 PM](https://user-images.githubusercontent.com/61961329/169674050-601086d1-2225-4c00-86d0-cd2ba33c0360.png)

Start Screen. [All apps that are present on screen execpt Settings will be removed in final release]
![Screenshot 2022-05-24 9 03 01 PM](https://user-images.githubusercontent.com/61961329/170171002-3b903357-bf7c-4d5e-8dc2-c39fcbf7dd47.png)


All applications will have their own .HTML files in different folders, thanks to the CSS and Javascript libraries that I am using to buidl this DE and QuesbookOS too!

## Main apps / webpages
Like I said previously, every app will have their own unique folders that contains **.html**,**.css** & **.js** files for those to work!
![Screenshot 2022-05-24 9 38 35 PM](https://user-images.githubusercontent.com/61961329/170174934-45a52632-b2e8-4f55-a8a6-41c42d23c82a.png)

## The Status Bar!
Featued in every **ALMOST** mobile operating system, it is very important! Every user will have to interact either if it's changing the screen orientaton or going to the settings.
![Screenshot 2022-05-24 9 41 43 PM](https://user-images.githubusercontent.com/61961329/170175131-82d0e689-7d8c-40a6-b5ea-1cc98be0d26e.png)

the code is very simple and easy, no need for Javascript (_yet_). More things such as Networking, Notifications and Cellular data will be added with Javascript. And maybe some shell programming **BASH basically!**
### CODE (Updated):
`````
  <div style="width: 100%; height:3.5%;" class="bg-black fg-white"><span class="title">Welcome</span></div>
`````
## Lockscreen
The lockscreen is the "most important" part of the operating system, I mean how else are users going to log in when they turn off their devices!
![Screenshot 2022-05-25 10 03 01 PM](https://user-images.githubusercontent.com/61961329/170413749-c16d9616-1f43-42b8-a379-50c07fb28f29.png)
I should mention that the lockscreen may look different unlike the screenshot you're seeing right now.

## How will this function?
* QuestbookOS will be built on top of the Linux Kernel
* The desktop environment is powered by Mozilla's Gecko!!
* User interface was created with HTML, CSS and Javascript
* Everything else will be written in C / C++

## Upcomming Features
* Windows 8 Lockscreen style [added]
* touch keyboard
* touchscreen support (offically not supported at the momment)
* Volume controls
* Wifi support
* Bluetooth support
* Linux Kernel [VERY IMPORTANT!]
