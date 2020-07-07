const forecastResponse = {
  'cod': '200',
  'message': 0,
  'cnt': 40,
  'list': [
    {
      'dt': 1594101600,
      'main': {
        'temp': 13.65,
        'feels_like': 11.32,
        'temp_min': 13.65,
        'temp_max': 14.35,
        'pressure': 1022,
        'sea_level': 1021,
        'grnd_level': 1018,
        'humidity': 60,
        'temp_kf': -0.7
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 89
      },
      'wind': {
        'speed': 2.02,
        'deg': 256
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-07 06:00:00'
    },
    {
      'dt': 1594112400,
      'main': {
        'temp': 17.06,
        'feels_like': 13.52,
        'temp_min': 17.06,
        'temp_max': 18.18,
        'pressure': 1021,
        'sea_level': 1021,
        'grnd_level': 1018,
        'humidity': 51,
        'temp_kf': -1.12
      },
      'weather': [
        {
          'id': 801,
          'main': 'Clouds',
          'description': 'few clouds',
          'icon': '02d'
        }
      ],
      'clouds': {
        'all': 22
      },
      'wind': {
        'speed': 4.01,
        'deg': 239
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-07 09:00:00'
    },
    {
      'dt': 1594123200,
      'main': {
        'temp': 18.51,
        'feels_like': 14.48,
        'temp_min': 18.51,
        'temp_max': 18.89,
        'pressure': 1020,
        'sea_level': 1020,
        'grnd_level': 1017,
        'humidity': 47,
        'temp_kf': -0.38
      },
      'weather': [
        {
          'id': 802,
          'main': 'Clouds',
          'description': 'scattered clouds',
          'icon': '03d'
        }
      ],
      'clouds': {
        'all': 35
      },
      'wind': {
        'speed': 4.75,
        'deg': 258
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-07 12:00:00'
    },
    {
      'dt': 1594134000,
      'main': {
        'temp': 21.18,
        'feels_like': 17.33,
        'temp_min': 21.18,
        'temp_max': 21.25,
        'pressure': 1019,
        'sea_level': 1019,
        'grnd_level': 1016,
        'humidity': 41,
        'temp_kf': -0.07
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 70
      },
      'wind': {
        'speed': 4.63,
        'deg': 255
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-07 15:00:00'
    },
    {
      'dt': 1594144800,
      'main': {
        'temp': 18.62,
        'feels_like': 16,
        'temp_min': 18.62,
        'temp_max': 18.62,
        'pressure': 1017,
        'sea_level': 1017,
        'grnd_level': 1015,
        'humidity': 59,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 85
      },
      'wind': {
        'speed': 3.98,
        'deg': 266
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-07 18:00:00'
    },
    {
      'dt': 1594155600,
      'main': {
        'temp': 17,
        'feels_like': 15.28,
        'temp_min': 17,
        'temp_max': 17,
        'pressure': 1017,
        'sea_level': 1017,
        'grnd_level': 1014,
        'humidity': 72,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 3.31,
        'deg': 264
      },
      'rain': {
        '3h': 0.58
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2020-07-07 21:00:00'
    },
    {
      'dt': 1594166400,
      'main': {
        'temp': 16.34,
        'feels_like': 13.27,
        'temp_min': 16.34,
        'temp_max': 16.34,
        'pressure': 1015,
        'sea_level': 1015,
        'grnd_level': 1012,
        'humidity': 76,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 5.32,
        'deg': 247
      },
      'rain': {
        '3h': 0.91
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2020-07-08 00:00:00'
    },
    {
      'dt': 1594177200,
      'main': {
        'temp': 16.24,
        'feels_like': 13.71,
        'temp_min': 16.24,
        'temp_max': 16.24,
        'pressure': 1014,
        'sea_level': 1014,
        'grnd_level': 1011,
        'humidity': 84,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 5.2,
        'deg': 254
      },
      'rain': {
        '3h': 0.57
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2020-07-08 03:00:00'
    },
    {
      'dt': 1594188000,
      'main': {
        'temp': 16.42,
        'feels_like': 14.43,
        'temp_min': 16.42,
        'temp_max': 16.42,
        'pressure': 1014,
        'sea_level': 1014,
        'grnd_level': 1011,
        'humidity': 85,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 4.6,
        'deg': 271
      },
      'rain': {
        '3h': 1.35
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-08 06:00:00'
    },
    {
      'dt': 1594198800,
      'main': {
        'temp': 16.87,
        'feels_like': 15.58,
        'temp_min': 16.87,
        'temp_max': 16.87,
        'pressure': 1015,
        'sea_level': 1015,
        'grnd_level': 1012,
        'humidity': 81,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 3.45,
        'deg': 275
      },
      'rain': {
        '3h': 0.21
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-08 09:00:00'
    },
    {
      'dt': 1594209600,
      'main': {
        'temp': 16.75,
        'feels_like': 16.49,
        'temp_min': 16.75,
        'temp_max': 16.75,
        'pressure': 1016,
        'sea_level': 1016,
        'grnd_level': 1013,
        'humidity': 81,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 1.92,
        'deg': 273
      },
      'rain': {
        '3h': 0.32
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-08 12:00:00'
    },
    {
      'dt': 1594220400,
      'main': {
        'temp': 16.85,
        'feels_like': 17.1,
        'temp_min': 16.85,
        'temp_max': 16.85,
        'pressure': 1017,
        'sea_level': 1017,
        'grnd_level': 1014,
        'humidity': 78,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 0.97,
        'deg': 259
      },
      'rain': {
        '3h': 0.28
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-08 15:00:00'
    },
    {
      'dt': 1594231200,
      'main': {
        'temp': 18.1,
        'feels_like': 18.2,
        'temp_min': 18.1,
        'temp_max': 18.1,
        'pressure': 1016,
        'sea_level': 1016,
        'grnd_level': 1013,
        'humidity': 73,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 97
      },
      'wind': {
        'speed': 1.27,
        'deg': 220
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-08 18:00:00'
    },
    {
      'dt': 1594242000,
      'main': {
        'temp': 17.36,
        'feels_like': 17.22,
        'temp_min': 17.36,
        'temp_max': 17.36,
        'pressure': 1016,
        'sea_level': 1016,
        'grnd_level': 1014,
        'humidity': 85,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n'
        }
      ],
      'clouds': {
        'all': 92
      },
      'wind': {
        'speed': 2.41,
        'deg': 207
      },
      'rain': {
        '3h': 0.13
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2020-07-08 21:00:00'
    },
    {
      'dt': 1594252800,
      'main': {
        'temp': 17.03,
        'feels_like': 15.99,
        'temp_min': 17.03,
        'temp_max': 17.03,
        'pressure': 1015,
        'sea_level': 1015,
        'grnd_level': 1013,
        'humidity': 87,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n'
        }
      ],
      'clouds': {
        'all': 96
      },
      'wind': {
        'speed': 3.71,
        'deg': 246
      },
      'rain': {
        '3h': 1.02
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2020-07-09 00:00:00'
    },
    {
      'dt': 1594263600,
      'main': {
        'temp': 17,
        'feels_like': 15.59,
        'temp_min': 17,
        'temp_max': 17,
        'pressure': 1014,
        'sea_level': 1014,
        'grnd_level': 1011,
        'humidity': 87,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 4.23,
        'deg': 227
      },
      'rain': {
        '3h': 0.4
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2020-07-09 03:00:00'
    },
    {
      'dt': 1594274400,
      'main': {
        'temp': 16.9,
        'feels_like': 14.32,
        'temp_min': 16.9,
        'temp_max': 16.9,
        'pressure': 1013,
        'sea_level': 1013,
        'grnd_level': 1010,
        'humidity': 81,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 78
      },
      'wind': {
        'speed': 5.31,
        'deg': 224
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-09 06:00:00'
    },
    {
      'dt': 1594285200,
      'main': {
        'temp': 18.13,
        'feels_like': 15.81,
        'temp_min': 18.13,
        'temp_max': 18.13,
        'pressure': 1012,
        'sea_level': 1012,
        'grnd_level': 1010,
        'humidity': 78,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 5.23,
        'deg': 216
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-09 09:00:00'
    },
    {
      'dt': 1594296000,
      'main': {
        'temp': 19.61,
        'feels_like': 16.69,
        'temp_min': 19.61,
        'temp_max': 19.61,
        'pressure': 1011,
        'sea_level': 1011,
        'grnd_level': 1009,
        'humidity': 66,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 5.54,
        'deg': 225
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-09 12:00:00'
    },
    {
      'dt': 1594306800,
      'main': {
        'temp': 21.24,
        'feels_like': 16.22,
        'temp_min': 21.24,
        'temp_max': 21.24,
        'pressure': 1010,
        'sea_level': 1010,
        'grnd_level': 1007,
        'humidity': 61,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }
      ],
      'clouds': {
        'all': 99
      },
      'wind': {
        'speed': 8.69,
        'deg': 226
      },
      'rain': {
        '3h': 0.13
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-09 15:00:00'
    },
    {
      'dt': 1594317600,
      'main': {
        'temp': 19.06,
        'feels_like': 15.24,
        'temp_min': 19.06,
        'temp_max': 19.06,
        'pressure': 1008,
        'sea_level': 1008,
        'grnd_level': 1005,
        'humidity': 70,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 97
      },
      'wind': {
        'speed': 7,
        'deg': 237
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-09 18:00:00'
    },
    {
      'dt': 1594328400,
      'main': {
        'temp': 17.41,
        'feels_like': 13.48,
        'temp_min': 17.41,
        'temp_max': 17.41,
        'pressure': 1009,
        'sea_level': 1009,
        'grnd_level': 1006,
        'humidity': 75,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n'
        }
      ],
      'clouds': {
        'all': 100
      },
      'wind': {
        'speed': 6.91,
        'deg': 285
      },
      'rain': {
        '3h': 0.6
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2020-07-09 21:00:00'
    },
    {
      'dt': 1594339200,
      'main': {
        'temp': 13.72,
        'feels_like': 8.76,
        'temp_min': 13.72,
        'temp_max': 13.72,
        'pressure': 1010,
        'sea_level': 1010,
        'grnd_level': 1008,
        'humidity': 72,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 76
      },
      'wind': {
        'speed': 6.69,
        'deg': 303
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2020-07-10 00:00:00'
    },
    {
      'dt': 1594350000,
      'main': {
        'temp': 12.78,
        'feels_like': 8.27,
        'temp_min': 12.78,
        'temp_max': 12.78,
        'pressure': 1013,
        'sea_level': 1013,
        'grnd_level': 1010,
        'humidity': 76,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 802,
          'main': 'Clouds',
          'description': 'scattered clouds',
          'icon': '03n'
        }
      ],
      'clouds': {
        'all': 27
      },
      'wind': {
        'speed': 6.01,
        'deg': 301
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2020-07-10 03:00:00'
    },
    {
      'dt': 1594360800,
      'main': {
        'temp': 13.29,
        'feels_like': 9.53,
        'temp_min': 13.29,
        'temp_max': 13.29,
        'pressure': 1015,
        'sea_level': 1015,
        'grnd_level': 1012,
        'humidity': 64,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 802,
          'main': 'Clouds',
          'description': 'scattered clouds',
          'icon': '03d'
        }
      ],
      'clouds': {
        'all': 29
      },
      'wind': {
        'speed': 4.25,
        'deg': 304
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-10 06:00:00'
    },
    {
      'dt': 1594371600,
      'main': {
        'temp': 16.02,
        'feels_like': 11.88,
        'temp_min': 16.02,
        'temp_max': 16.02,
        'pressure': 1017,
        'sea_level': 1017,
        'grnd_level': 1014,
        'humidity': 57,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 801,
          'main': 'Clouds',
          'description': 'few clouds',
          'icon': '02d'
        }
      ],
      'clouds': {
        'all': 13
      },
      'wind': {
        'speed': 5.08,
        'deg': 293
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-10 09:00:00'
    },
    {
      'dt': 1594382400,
      'main': {
        'temp': 18.61,
        'feels_like': 13.66,
        'temp_min': 18.61,
        'temp_max': 18.61,
        'pressure': 1018,
        'sea_level': 1018,
        'grnd_level': 1016,
        'humidity': 41,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 802,
          'main': 'Clouds',
          'description': 'scattered clouds',
          'icon': '03d'
        }
      ],
      'clouds': {
        'all': 35
      },
      'wind': {
        'speed': 5.49,
        'deg': 295
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-10 12:00:00'
    },
    {
      'dt': 1594393200,
      'main': {
        'temp': 19.4,
        'feels_like': 14.52,
        'temp_min': 19.4,
        'temp_max': 19.4,
        'pressure': 1019,
        'sea_level': 1019,
        'grnd_level': 1016,
        'humidity': 43,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }
      ],
      'clouds': {
        'all': 32
      },
      'wind': {
        'speed': 5.81,
        'deg': 304
      },
      'rain': {
        '3h': 0.23
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-10 15:00:00'
    },
    {
      'dt': 1594404000,
      'main': {
        'temp': 17.95,
        'feels_like': 13.82,
        'temp_min': 17.95,
        'temp_max': 17.95,
        'pressure': 1020,
        'sea_level': 1020,
        'grnd_level': 1017,
        'humidity': 50,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d'
        }
      ],
      'clouds': {
        'all': 46
      },
      'wind': {
        'speed': 5.03,
        'deg': 320
      },
      'rain': {
        '3h': 0.32
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-10 18:00:00'
    },
    {
      'dt': 1594414800,
      'main': {
        'temp': 15.42,
        'feels_like': 11.23,
        'temp_min': 15.42,
        'temp_max': 15.42,
        'pressure': 1022,
        'sea_level': 1022,
        'grnd_level': 1019,
        'humidity': 54,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n'
        }
      ],
      'clouds': {
        'all': 0
      },
      'wind': {
        'speed': 4.72,
        'deg': 316
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2020-07-10 21:00:00'
    },
    {
      'dt': 1594425600,
      'main': {
        'temp': 13.53,
        'feels_like': 9.59,
        'temp_min': 13.53,
        'temp_max': 13.53,
        'pressure': 1023,
        'sea_level': 1023,
        'grnd_level': 1020,
        'humidity': 60,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n'
        }
      ],
      'clouds': {
        'all': 0
      },
      'wind': {
        'speed': 4.29,
        'deg': 312
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2020-07-11 00:00:00'
    },
    {
      'dt': 1594436400,
      'main': {
        'temp': 12.37,
        'feels_like': 8.45,
        'temp_min': 12.37,
        'temp_max': 12.37,
        'pressure': 1023,
        'sea_level': 1023,
        'grnd_level': 1020,
        'humidity': 61,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n'
        }
      ],
      'clouds': {
        'all': 0
      },
      'wind': {
        'speed': 4.01,
        'deg': 319
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2020-07-11 03:00:00'
    },
    {
      'dt': 1594447200,
      'main': {
        'temp': 12.86,
        'feels_like': 9.65,
        'temp_min': 12.86,
        'temp_max': 12.86,
        'pressure': 1024,
        'sea_level': 1024,
        'grnd_level': 1021,
        'humidity': 65,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d'
        }
      ],
      'clouds': {
        'all': 0
      },
      'wind': {
        'speed': 3.41,
        'deg': 299
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-11 06:00:00'
    },
    {
      'dt': 1594458000,
      'main': {
        'temp': 16.81,
        'feels_like': 13.07,
        'temp_min': 16.81,
        'temp_max': 16.81,
        'pressure': 1025,
        'sea_level': 1025,
        'grnd_level': 1022,
        'humidity': 51,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d'
        }
      ],
      'clouds': {
        'all': 0
      },
      'wind': {
        'speed': 4.22,
        'deg': 298
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-11 09:00:00'
    },
    {
      'dt': 1594468800,
      'main': {
        'temp': 19.65,
        'feels_like': 15.45,
        'temp_min': 19.65,
        'temp_max': 19.65,
        'pressure': 1025,
        'sea_level': 1025,
        'grnd_level': 1023,
        'humidity': 39,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d'
        }
      ],
      'clouds': {
        'all': 0
      },
      'wind': {
        'speed': 4.48,
        'deg': 306
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-11 12:00:00'
    },
    {
      'dt': 1594479600,
      'main': {
        'temp': 20.05,
        'feels_like': 16.1,
        'temp_min': 20.05,
        'temp_max': 20.05,
        'pressure': 1025,
        'sea_level': 1025,
        'grnd_level': 1023,
        'humidity': 42,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 801,
          'main': 'Clouds',
          'description': 'few clouds',
          'icon': '02d'
        }
      ],
      'clouds': {
        'all': 22
      },
      'wind': {
        'speed': 4.56,
        'deg': 319
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-11 15:00:00'
    },
    {
      'dt': 1594490400,
      'main': {
        'temp': 18.89,
        'feels_like': 15.8,
        'temp_min': 18.89,
        'temp_max': 18.89,
        'pressure': 1025,
        'sea_level': 1025,
        'grnd_level': 1023,
        'humidity': 47,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04d'
        }
      ],
      'clouds': {
        'all': 51
      },
      'wind': {
        'speed': 3.53,
        'deg': 329
      },
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2020-07-11 18:00:00'
    },
    {
      'dt': 1594501200,
      'main': {
        'temp': 16.71,
        'feels_like': 14.28,
        'temp_min': 16.71,
        'temp_max': 16.71,
        'pressure': 1027,
        'sea_level': 1027,
        'grnd_level': 1024,
        'humidity': 53,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 69
      },
      'wind': {
        'speed': 2.5,
        'deg': 342
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2020-07-11 21:00:00'
    },
    {
      'dt': 1594512000,
      'main': {
        'temp': 14.98,
        'feels_like': 12.8,
        'temp_min': 14.98,
        'temp_max': 14.98,
        'pressure': 1027,
        'sea_level': 1027,
        'grnd_level': 1024,
        'humidity': 57,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 802,
          'main': 'Clouds',
          'description': 'scattered clouds',
          'icon': '03n'
        }
      ],
      'clouds': {
        'all': 35
      },
      'wind': {
        'speed': 1.96,
        'deg': 344
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2020-07-12 00:00:00'
    },
    {
      'dt': 1594522800,
      'main': {
        'temp': 13.6,
        'feels_like': 11.62,
        'temp_min': 13.6,
        'temp_max': 13.6,
        'pressure': 1027,
        'sea_level': 1027,
        'grnd_level': 1024,
        'humidity': 58,
        'temp_kf': 0
      },
      'weather': [
        {
          'id': 802,
          'main': 'Clouds',
          'description': 'scattered clouds',
          'icon': '03n'
        }
      ],
      'clouds': {
        'all': 50
      },
      'wind': {
        'speed': 1.37,
        'deg': 342
      },
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2020-07-12 03:00:00'
    }
  ],
  'city': {
    'id': 2643743,
    'name': 'London',
    'coord': {
      'lat': 51.5085,
      'lon': -0.1257
    },
    'country': 'GB',
    'population': 1000000,
    'timezone': 3600,
    'sunrise': 1594093958,
    'sunset': 1594153075
  }
};

const weatherResponse = {
  'coord': {
    'lon': -0.13,
    'lat': 51.51
  },
  'weather': [
    {
      'id': 804,
      'main': 'Clouds',
      'description': 'overcast clouds',
      'icon': '04n'
    }
  ],
  'base': 'stations',
  'main': {
    'temp': 14.37,
    'feels_like': 11.65,
    'temp_min': 12.22,
    'temp_max': 17.22,
    'pressure': 1023,
    'humidity': 51
  },
  'visibility': 10000,
  'wind': {
    'speed': 2.1,
    'deg': 310
  },
  'clouds': {
    'all': 95
  },
  'dt': 1594084613,
  'sys': {
    'type': 1,
    'id': 1414,
    'country': 'GB',
    'sunrise': 1594093958,
    'sunset': 1594153077
  },
  'timezone': 3600,
  'id': 2643743,
  'name': 'London',
  'cod': 200
};

const mappedWeather = {
  'city': 'London',
  'country': 'GB',
  'date': 'Tuesday, July 7',
  'humidity': 45,
  'icon_id': 804,
  'temperature': 19.36,
  'description': 'overcast clouds',
  'wind_speed': 5.1,
  'condition': 200
};

const mappedForecast = {
  'forecast': [
    {
      'date': 'Wednesday, July 8',
      'humidity': 86,
      'icon_id': 500,
      'temperature': 16.41,
      'description': 'light rain',
      'wind_speed': 4.48,
      'mintemp': 16.41,
      'maxtemp': 16.41,
      'day': 'Wednesday'
    },
    {
      'date': 'Thursday, July 9',
      'humidity': 83,
      'icon_id': 500,
      'temperature': 16.57,
      'description': 'light rain',
      'wind_speed': 4.71,
      'mintemp': 16.57,
      'maxtemp': 16.57,
      'day': 'Thursday'
    },
    {
      'date': 'Friday, July 10',
      'humidity': 66,
      'icon_id': 803,
      'temperature': 13.52,
      'description': 'broken clouds',
      'wind_speed': 5.03,
      'mintemp': 13.52,
      'maxtemp': 13.52,
      'day': 'Friday'
    },
    {
      'date': 'Saturday, July 11',
      'humidity': 62,
      'icon_id': 800,
      'temperature': 13,
      'description': 'clear sky',
      'wind_speed': 3.38,
      'mintemp': 13,
      'maxtemp': 13,
      'day': 'Saturday'
    },
    {
      'date': 'Sunday, July 12',
      'humidity': 64,
      'icon_id': 802,
      'temperature': 14.61,
      'description': 'scattered clouds',
      'wind_speed': 1.41,
      'mintemp': 14.61,
      'maxtemp': 14.61,
      'day': 'Sunday'
    }
  ]
};


// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  forecastResponse,
  weatherResponse,
  mappedWeather,
  mappedForecast
};
