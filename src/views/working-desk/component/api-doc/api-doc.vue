<template>
    <el-card class="box-card" shadow="hover" :body-style="{ padding: '10px' }">
        <div slot="header" class="clearfix">
            <span class="headline">接口文档</span>
            <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-more"></i></el-button>
        </div>
        <el-table
            :data="tableData"
            class="table"
            :show-header="false">
            <el-table-column
                    prop="name"
                    label="文档"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="tag"
                    label="种类"
                    width="70"
                    filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag
                            style="height: 28px; line-height: 26px;"
                            :type="getTagColor(scope.row.tag)"
                            disable-transitions>{{scope.row.tag}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="70">
                <template slot-scope="scope">
                    <!-- 编辑 -->
                    <el-button type="primary" size="mini">
                        访问
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
    export default {
        name: "api-doc",
        data() {
            return {
                tableData: [{
                    name: '智慧教室接口文档',
                    tag: '校园',
                    link: ''
                }, {
                    name: '畅校园宣讲会接口文档',
                    tag: '校园',
                    link: ''
                }, {
                    name: '账号体系接口文档',
                    tag: '内部',
                    link: ''
                }, {
                    name: '创享堆接口文档',
                    tag: '内部',
                    link: ''
                }, {
                    name: '借阅伴侣堆接口文档',
                    tag: '参赛',
                    link: ''
                }, {
                    name: '缺陷管理系统接口文档',
                    tag: '外包',
                    link: ''
                }]
            }
        },
        methods: {
            getTagColor (name) {
                let color = ''
                switch (name) {
                    case '校园':
                        color = 'primary'
                        break;
                    case '内部':
                        color = 'success'
                        break;
                    case '参赛':
                        color = 'warning'
                        break;
                    case '外包':
                        color = 'info'
                        break;
                }
                return color
            }
        }
    }
</script>

<style scoped>
    .box-card {
        height: 350px;
        width: 360px;
    }

    .headline {
        color: #333;
        background: transparent;
        text-decoration: none;
        outline: none;
        /*cursor: pointer;*/
        transition: color .2s ease;
    }

    .table {
        width: 100%;
        height: 270px;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    .table:before {
        content: none
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
</style>