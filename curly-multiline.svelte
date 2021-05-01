<script>
  if (!window.foo)
      window.foo =
        window.bar
          .toLowerCase()
          .replace(/a/g, "b")
          .trim();
</script>
