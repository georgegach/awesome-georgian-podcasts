# კონტრიბუციის სახელმძღვანელო
ახალი პოდკასტის სიაშია დამატების ორი გზა არსებობს:

## 1. Google Forms
შეავსეთ გუგლის ფორმა და პოდკასტი მალე დაემატება თუ ლოგო და პლატფორმის მისამართები თან ახლავს.
https://forms.gle/RLZHXSA1V2CPxZd56 


## 2. Fork & Pull
1. მოჩანგლეთ რეპო
2. `src/db.json` ჯეისონის ობიექტის ბოლოს შეავსეთ ახალი ელემენტი თავისი პლატფორმებით. 
3. ახალი პოდკასტის კატეგორიის სახელი ზუსტად უნდა ემთხვეოდეს `src/cats.json`-ის კატეგორიებიდან ერთ-ერთს
4. გაუშვით კოდი Node-ში 
```bash
cd src/
node update.js
```
5. `README.md` ფაილი განახლებული უნდა იყოს უკვე. გადაამოწმეთ რომ ყველაფერი რიგზეა.
6. გამოუშვით ფულ რექვესთი


### ყალიბი
|   | პოდკასტი    |  წამყვანი |     აღწერა |   პლატფორმები             |
|---|:-----------:|:--------:|:----------:|:---------------------------:|
| <img src="https://img.marketer.ge/2015/06/579183_381725635240587_129031775_n.png" width=80> | [მარკეტერის პოდკასტი](https://anchor.fm/marketerge/episodes/--e4mhpt) | აკო ახალაია | პოდკასტი ბიზნესზე, მარკეტინგზე, მენეჯმენტზე და სტარტაპებზე. | [<img src="assets/itunes.png" height=22>](http://itunes.com) [<img src="assets/soundcloud.png" height=22>](https://soundcloud.com/marketerge/tccawxoobg9d)  [<img src="assets/pocketcasts.png" height=22>](https://pca.st/tw49)  [<img src="assets/spotify.png" height=22>](https://open.spotify.com/show/46mwLcPYKqjnQduVukWHNp) |
