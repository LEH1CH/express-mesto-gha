const VALIDATION_ERROR_CODE = 400;
const VALIDATION_ERROR_MESSAGE = {
  message:
    "Переданы некорректные данные в методы создания карточки, пользователя, обновления аватара или профиля",
};
const NOT_FOUND_ERROR_CODE = 404;
const NOT_FOUND_ERROR_MESSAGE = {
  message: "Пользователь или карточка не найден",
};
const DEFAULT_ERROR_CODE = 500;
const DEFAULT_ERROR_MESSAGE = { message: "Ошибка по-умолчанию" };

module.exports = {
  VALIDATION_ERROR_CODE,
  VALIDATION_ERROR_MESSAGE,
  NOT_FOUND_ERROR_CODE,
  NOT_FOUND_ERROR_MESSAGE,
  DEFAULT_ERROR_CODE,
  DEFAULT_ERROR_MESSAGE,
};
