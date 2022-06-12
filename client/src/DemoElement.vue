<template>
  <div>
    <el-alert title="" type="info">
      <slot name="header"
        >No HEADER slot content passed (this is default value)</slot
      >
    </el-alert>

    <p>This is text from inside of the element</p>

    <el-alert title="" type="info">
      <slot>No DEFAULT slot content passed (this is default value)</slot>
    </el-alert>

    <el-alert title="" type="info">
      <slot name="footer"
        >No FOOTER slot content passed (this is default value)</slot
      >
    </el-alert>
  </div>
</template>

<script>
export default {};
</script>