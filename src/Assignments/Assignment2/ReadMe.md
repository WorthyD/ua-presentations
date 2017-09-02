# Assignment 2


## CSS HTML Component
Recreate the website in the picture [assignment2.png](assignment2.png).  You'll find two images in this folder to use for the site.  You'll get all the text, font sizes and colors in [text.md](text.md)

## JS Component
Write a lightweight JavaScript library for converting dates into readable strings.

- Create a file and name it DateFormatting.js
- Create an object and name it `DateFormatter`
- Create the following methods.  All methods will have one input parameter.
    - `getShortTime` - returns a the date's time with hours, minutes and AM or PM
        - Example: "4:20 PM", "3:00 AM"
    - `getLongTime` - returns a the date's time with hours, minutes, seconds and AM or PM
        - Example: "4:20:20 PM", "3:00:33 AM"
    - `getShortDate` - returns the date in the following format `month/day/year`
        - Example: "1/20/2017", "10/15/2017"
    - `getLongDate` - returns the date in the following format `Month Day, Year`
        - Example: "January 20th, 2017", "October 15th, 2017"
    - `getShortDateTime` - returns the date in the following format `month/day/year hour:minutes AM|PM`
        -Example: '1/20/2017 4:20 PM', '10/15/2017 3:00 AM'
    - `getLongDateTime` - returns the date in the following format- `Month Day, Year hour:minutes AM|PM`
        - Example: "January 20th, 2017 4:20 PM", "October 15th, 2017 3:00 AM"
    - `getExtendedDateTime` - returns the date in the following format- `Day of the week, Month Day, Year hour:minutes AM|PM`
        - Example: "Friday, January 20th, 2017 4:20 PM", "Sunday, October 15th, 2017 3:00 AM"
