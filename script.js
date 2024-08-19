<script>
    window.addEventListener('message', function(event) {
        if (event.origin === 'https://embedstreams.me') {
            // Example to block certain messages from the iframe.
            event.stopImmediatePropagation();
        }
    }, false);

    window.open = function() {
        console.log('Attempt to open a pop-up was blocked.');
        return null;
    };
</script>
