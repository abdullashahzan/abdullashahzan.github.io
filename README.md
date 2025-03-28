
# Portfolio website

This is my portfolio website which showcases my achievements, projects as well as give a short introduction about me.


## Author

- [@abdullashahzan](https://www.github.com/abdullashahzan)


## Documentation

[Documentation](https://linktodocumentation)


## Features

- Mini game (Russian Roulette)
- Live previews
- Fullscreen mode
- Cross platform


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

