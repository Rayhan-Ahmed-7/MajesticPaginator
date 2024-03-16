# Majestic Paginator

Majestic Paginator is a classic paginator designed to provide efficient and elegant pagination functionality for your web pages. With its stylish and elegant design, Majestic Paginator enhances the user experience by offering seamless navigation through your content.

## Features

- **Efficient Pagination**: Navigate through your web pages effortlessly with Majestic Paginator's efficient pagination system.
  
- **Stylish and Elegant Design**: Majestic Paginator boasts a stylish and elegant design, enhancing the aesthetic appeal of your web pages.
  
- **Skip Functionality**: Skip through multiple pages at once with the convenient skip buttons, allowing you to jump ahead by 5 pages at a time.


## Usage

To use the Pagination component in your React application, follow these steps:

1. Import the Pagination component into your file:

    ```javascript
    import { Pagination } from './components/pagination/Pagination';
    ```

2. Place the Pagination component in your JSX code, providing the necessary props:

    ```jsx
    <Pagination 
      total={50} 
      currentPage={10} 
      onChange={(currentPage) => {console.log(currentPage)}}
    />
    ```

    - `total`: The length of your data.
    - `currentPage`: The current active page.
    - `onChange`: A callback function to handle page changes. It receives the current page number as a parameter.

3. Customize the Pagination component by adjusting the props according to your requirements.
