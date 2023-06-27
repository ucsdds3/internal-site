

<h1>Add an Event</h1>
<form action="?/addEvent" method="POST">
    <h3>Event Title</h3>
    <input type="text" name="title">
    <h3>Date</h3>
    <input type="date" name="date">
    <h3>Time</h3>
    <input type="time" name="time">
    <h3>Description</h3>
    <textarea name="description"></textarea>
    <h3>Image</h3>
    <input type="file" name="image">
    <h3>Location</h3>
    <input type="text" name="location">
    <h3>Presenters</h3>
    <input type="text" name="presenters">
    <h3>Registration Link</h3>
    <input type="text" name="registrationLink">
    <button type="submit">Add Event</button>
</form>