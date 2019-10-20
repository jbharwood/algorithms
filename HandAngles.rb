require 'minitest/autorun'

# Write a method to determine the angle between the two hands on a clock.
# m is an integer between 0 and 59, and h is an integer between 0 and 11.
def hand_angle(h, m)
  minute_degrees = m * 6
  hour_degrees = (30 * h) + (0.5 * m)
  degrees = (hour_degrees - minute_degrees).abs
  degrees > 180 ? 360 - degrees : degrees
end


describe 'clock hands' do
  it 'must find the correct angle' do
    TESTS = [
      { h: 1, m: 30, expected: 135 },
      { h: 3, m: 15, expected: 7.5 },
      { h: 6, m: 50, expected: 95 },
      { h: 8, m: 15, expected: 157.5 },
      { h: 11, m: 1, expected: 35.5 }
    ]

    TESTS.each do |t|
      assert_equal t[:expected], hand_angle(t[:h], t[:m])
    end
  end
end

puts hand_angle(1,30)
