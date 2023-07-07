<script lang="ts">
	import { Datepicker } from 'svelte-calendar';
	import Dropzone from 'svelte-file-dropzone/Dropzone.svelte';
	// import dayjs from 'dayjs';

	// Custom Calendar - Doesnt work rn
	// let format = 'dddd, MMMM D, YYYY';
	// let store: any;
	// const today = new Date();
	// const theme = {
	// 	calendar: {
	// 		width: '30vw',
	// 		maxWidth: '50vw',
	// 		legend: {
	// 			height: '45px'
	// 		},
	// 		shadow: '0px 10px 26px rgba(0, 0, 0, 0.25)',
	// 		colors: {
	// 			text: {
	// 				primary: '#333',
	// 				highlight: '#fff'
	// 			},
	// 			background: {
	// 				primary: '#fff',
	// 				highlight: 'var(--ds3-orange)',
	// 				hover: '#eee'
	// 			},
	// 			border: '#eee'
	// 		},
	// 		font: {
	// 			regular: '1.5em',
	// 			large: '37em'
	// 		},
	// 		grid: {
	// 			disabledOpacity: '.35',
	// 			outsiderOpacity: '.6'
	// 		}
	// 	}
	// };

	// Custom file upload
	const acceptFormats = ['.png', '.jpg', '.bmp', '.gif'];
	let files: any = {
		accepted: [],
		rejected: []
	};
	function handleFilesSelect(e: any) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}
	let FOCUSED_FILE = false;
	function focusFile() {
		FOCUSED_FILE = !FOCUSED_FILE;
	}
</script>

<section>
	<h1>Add an Event</h1>
	<form action="?/addEvent" method="POST">
		<h3>Event Title</h3>
		<input type="text" name="title" />
		<h3>Date</h3>
		<!-- <Datepicker {format} {theme} start={today} bind:store />
		<p>
			{($store?.selected).format('MM/DD/YYYY')}
		</p> -->
		<!-- <input type="text" bind:value={}> -->
		<input type="date" name="date" />
		<h3>Time</h3>
		<input type="time" name="time" />
		<h3>Description</h3>
		<textarea name="description" />
		<h3>Image</h3>
		<input type="hidden" name="image" bind:value={files.accepted} />
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div id="file-upload" on:mouseenter={focusFile} on:mouseleave={focusFile}>
			<Dropzone
				on:drop={handleFilesSelect}
				accept={[...acceptFormats]}
				containerStyles="
                    background-color: white;
                    border-radius: 5px;
                    {FOCUSED_FILE ? 'border: 2px solid var(--ds3-orange);' : ''}
                    border-style: dashed;
                    text-align: center;
					font-family: 'Inter';
                "
			>
				{#if files.accepted[0]}
					<p>
						Add more files? Current files:
						{#each files.accepted as file}
							{file.name},
						{/each}
					</p>
				{:else}
					<p>Click to add or drag and drop Images.</p>
				{/if}
			</Dropzone>
		</div>
		<h3>Location</h3>
		<input type="text" name="location" />
		<h3>Presenters</h3>
		<input type="text" name="presenters" />
		<h3>Registration Link</h3>
		<input type="text" name="registrationLink" />
		<button type="submit">Add Event</button>
	</form>
</section>

<style>
	@import url('https://fonts.googleapis.com/css?family=Inter&display=swap');
	section {
		width: 50%;
		margin: auto;
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	section h1 {
		width: 100%;
		font-size: 3rem;
		margin: 1.5rem 0;
		font-weight: bold;
	}

	section form {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	form h3 {
		font-size: 1.5rem;
		margin-bottom: 1%;
	}
	form input,
	textarea {
		padding: 2%;
		border-radius: 5px;
		font-family: 'Inter';
	}
	form input {
		font-weight: bold;
		font-size: 1rem;
	}
	form textarea {
		height: 6.5rem;
		resize: vertical;
	}
	form input:focus,
	textarea:focus {
		outline: none;
	}
	form #file-upload:hover {
		cursor: pointer;
	}
	form button {
		background-color: var(--ds3-orange);
		font-size: 1.25rem;
		margin-top: 1rem;
		padding: 2%;
		border-radius: 5px;
		font-weight: bold;
		color: white;
		transition: 0.2s;
		border: none;
	}
	form button:hover {
		cursor: pointer;
		background-color: var(--ds3-orange-lighten);
	}
</style>
