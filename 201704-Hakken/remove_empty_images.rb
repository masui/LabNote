Dir.open("images"){ |d|
  d.each { |file|
    file = "images/#{file}"
    if file =~ /png/ && File.size(file) == 0 then

      puts "rm #{file}"
    end
  }
}

