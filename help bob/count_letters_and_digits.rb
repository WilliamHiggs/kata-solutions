def count_letters_and_digits(input)
  input.gsub!(/[^0-9A-Za-z]/, '').length
end
